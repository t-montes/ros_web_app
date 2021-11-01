#!/bin/bash
. /opt/ros/melodic/setup.bash
cd ../..
source devel/setup.bash
export ROS_HOSTNAME=$IP_ADDRESS
export ROS_IP=$IP_ADDRESS
roslaunch ros_web_app_2 launch_GUI.launch
