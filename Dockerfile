FROM ros:melodic

SHELL ["/bin/bash","-c"]

WORKDIR /home/interfaz_folder

#ROS
RUN sudo apt update
RUN sudo apt upgrade -y
RUN sudo apt dist-upgrade
RUN echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc
RUN source ~/.bashrc
RUN sudo apt install python-rosdep python-rosinstall python-rosinstall-generator python-wstool build-essential -y
RUN sudo apt install python-rosdep -y
RUN rosdep update

#PYTHON 3 AND ENVIRONMENT
RUN sudo apt update
RUN sudo apt -y upgrade
RUN python3 -V
RUN sudo apt install -y python3-pip
RUN sudo apt install -y build-essential libssl-dev libffi-dev python3-dev

#DJANGO 
RUN python3 -m pip install Django

#DJANGO CHANNELS
RUN pip3 install setuptools-rust
RUN sudo apt-get install -y build-essential
RUN sudo apt-get install -y libssl-dev
RUN sudo apt-get install -y libffi-dev
RUN sudo apt-get install -y python3-dev
RUN sudo apt-get install -y cargo
RUN pip3 install cryptography --no-binary cryptography
RUN python3 -m pip install -U channels

#PYTHON PACKAGES
RUN pip3 install django-webpack-loader==0.7.0
RUN pip3 install djangorestframework
RUN pip3 install netifaces
RUN pip3 install pyyaml
RUN pip3 install rospkg

#CREATE A ROS WORKSPACE
RUN mkdir -p ~/catkin_ws/src
WORKDIR /home/interfaz_folder/catkin_ws
RUN echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc
RUN source ~/.bashrc
RUN /bin/bash -c 'source /opt/ros/melodic/setup.bash; catkin_make'
WORKDIR /home/interfaz_folder/catkin_ws/src
RUN git clone https://github.com/robocol-rem-u/master_msgs.git
COPY . /home/interfaz_folder/catkin_ws/src/ros_web_app_2
WORKDIR /home/interfaz_folder/catkin_ws
RUN /bin/bash -c '. /opt/ros/melodic/setup.bash; catkin_make'
WORKDIR /home/interfaz_folder/catkin_ws/src/ros_web_app_2

#EXECUTE ROSLAUNCH
CMD docker_instructions.sh