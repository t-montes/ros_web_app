#!/usr/bin/env python3
import ROS_funcs
import rospy
from master_msgs.msg import traction_Orders, imu_Speed, imu_Magnetism, pots, current, rpm, arm_Orders, connection, batteries, geociencia

# def ROS_func_thread():
	# pass
ros = ROS_funcs.Interface()

# print('Test node 2')
# rospy.init_node('Interface_Test_Node')

# pub_tra = rospy.Publisher('topic_traction_orders', traction_Orders, queue_size=1)
# pub_arm = rospy.Publisher('topic_arm_orders', arm_Orders, queue_size=1)
# pub_ims = rospy.Publisher('topic_imu_speed', imu_Speed, queue_size=1)
# pub_imm = rospy.Publisher('topic_imu_magnetism', imu_Magnetism, queue_size=1)
# pub_pot = rospy.Publisher('topic_pots', pots, queue_size=1)
# pub_cur = rospy.Publisher('topic_current', current, queue_size=1)
# pub_rpm = rospy.Publisher('topic_rpm', rpm, queue_size=1)
# pub_odo = rospy.Publisher ('odom', Odometry, queue_size=1)
# pub_bat = rospy.Publisher ('topic_bat', batteries, queue_size=1)
# pub_sen = rospy.Publisher ('topic_sensors', geociencia, queue_size=1)

# msg_bat = batteries()

# rate = rospy.Rate(10)
# while not rospy.is_shutdown():
# 	msg_bat.volttrac = 10.0
# 	pub_arm.publish(msg_bat)
# 	rate.sleep()
