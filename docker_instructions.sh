#!/bin/bash
. /opt/ros/melodic/setup.bash
cd ../..
source devel/setup.bash
export ROS_HOSTNAME=localhost
roslaunch ros_web_app_2 launch_GUI.launch
