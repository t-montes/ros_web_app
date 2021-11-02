#!/bin/bash
. /opt/ros/melodic/setup.bash
cd ../..
source devel/setup.bash
export ROS_IP=$IP_ADDRESS
echo 1
echo $IP_ADDRESS
echo 2
echo $ROS_IP
echo 3
roslaunch ros_web_app_2 launch_GUI.launch
