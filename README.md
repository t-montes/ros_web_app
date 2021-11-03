# Robocol Interface Web App for Rover and Submarine
## How to run the interface?
In Ubuntu 18.04 LTS
### Install ROS Melodic
```console
$ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
$ sudo apt install curl # if you haven't already installed curl
$ curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
$ sudo apt update
$ sudo apt upgrade
$ sudo apt dist-upgrade
$ sudo apt install ros-melodic-desktop-full
$ echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc
$ source ~/.bashrc
$ sudo apt install python-rosdep python-rosinstall python-rosinstall-generator python-wstool build-essential
$ sudo apt install python-rosdep
$ sudo rosdep init
$ rosdep update
```
### Install and update NodeJS and npm
```console
$ sudo apt update
$ sudo apt install nodejs
$ sudo apt update
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
$ source ~/.bashrc
$ nvm --version
$ nvm ls
$ nvm ls-remote
$ nvm install [version.number]
```
### Install Angular
```console
$ npm install -g @angular/cli@10.1.0
```
### Install Python 3 and configure development environment
```console
$ sudo apt update
$ sudo apt -y upgrade
$ python3 -V
$ sudo apt install -y python3-pip
$ sudo apt install build-essential libssl-dev libffi-dev python3-dev
$ sudo apt install -y python3-venv
$ python3.6 -m venv interface_env
$ source interface_env/bin/activate
```
Remember: 
- in this point, since we are using a python 3 environment, we can use python command instead of python3 and pip instead of pip3
- run "deactivate" IF you want to exit the python 3 environment
### Install Django
```console
$ python -m pip install Django
```
### Install Django Channels
```console
$ pip install setuptools-rust
$ sudo apt-get install build-essential libssl-dev libffi-dev python3-dev cargo
$ pip install cryptography --no-binary cryptography
$ pip install channels-redis
$ python -m pip install -U channels
```
### Install python packages
```console
$ pip install django-webpack-loader==0.7.0
$ pip install djangorestframework
$ pip install netifaces
$ pip install pyyaml
$ pip install rospkg
```
### Create a ROS Workspace
```console
$ mkdir -p ~/catkin_ws/src
$ cd ~/catkin_ws/
$ catkin_make
$ source devel/setup.bash
$ echo $ROS_PACKAGE_PATH
```
### Clone repository and build project
In catkin_ws/src
```console
$ git clone https://github.com/robocol-rem-u/ros_web_app_2.git
$ git clone https://github.com/robocol-rem-u/master_msgs.git
$ cd ros_web_app_2/Robocol/testapp/
$ npm install --legacy-peer-deps
$ npm run build
$ cd
$ cd catkin_ws/
$ catkin_make
```
### Finally, run the app!
```console
$ roslaunch ros_web_app_2 launch_GUI.launch
```
Now you should see the interface if you go to http://localhost:8000/home
Enjoy :)

-----

## About Docker
### To create the Docker Image
Make sure you are inside ros_webapp_2 folder

You need to login to DockerHub with Robocol´s credentials
```console
$ sudo docker login
```
Now, build the Docker Image:
```console
$ sudo docker buildx
$ sudo docker buildx ls
$ sudo docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
$ sudo docker buildx create --name multiarch --driver docker-container --use
$ sudo docker buildx inspect --bootstrap
$ sudo docker buildx inspect
$ sudo docker buildx build --platform linux/arm,linux/arm64,linux/amd64 --progress=plain -t robocol/interfaz . --push
```
The Docker image should be built and pushed to the DockerHub repository

### To run the Docker Image
If you are running the container on linux:
```console
$ sudo docker run --net=host -d --name=redis redis
$ sudo docker run --net=host --rm -it --env IP_ADDRESS=<YOUR IP ADDRESS> robocol/interfaz:latest
```
If you are running the container on Windows or WSL: 
```console
$ docker run -p 6379:6379 -d --name=redis redis
$ docker run -p 8000:8000 --rm -it --link redis:redis --env IP_ADDRESS=<YOUR IP ADDRESS> robocol/interfaz:latest
```

Wait for a few seconds. You should see the normal outputs in the console and the app working in http://localhost:8000/home

