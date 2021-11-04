#!/bin/bash
. /opt/ros/melodic/setup.bash
cd ../..
source devel/setup.bash
export ROS_IP=$IP_ADDRESS
export ROS_MASTER_URI=http://${IP_ROS_MASTER}:11311/
roslaunch ros_web_app_2 launch_GUI.launch
