#!/usr/bin/env python3
import os
import time,threading,math
import numpy as np
from std_srvs.srv import Empty, EmptyRequest
from nav_msgs.msg import Odometry
#ROS imports
import rospy
from master_msgs.msg import traction_Orders, imu_Speed, imu_Magnetism, pots, current, rpm, arm_Orders, connection, batteries, geociencia
from master_msgs.srv import service_enable

class Interface(object):
	def __init__(self):
		print("Initializating Node...")
		rospy.init_node('Interface_Node')
		rospy.loginfo("Node successfully initialized.")
		self.init_subscribers()
		self.init_publishers()
		rate = rospy.Rate(10)
		while not rospy.is_shutdown():
			rate.sleep()
		# rospy.spin()
		# self.scene = PlanningSceneInterface()
		# self.robot = RobotCommander()
		# self.p = PoseStamped()
		# self.scene_srv = rospy.ServiceProxy('/get_planning_scene', GetPlanningScene)
		# rospy.loginfo("Connecting to clear octomap service...")
		# self.clear_octomap_srv = rospy.ServiceProxy('/clear_octomap', Empty)
		# self.clear_octomap_srv.wait_for_service()
		# rospy.loginfo("Connected!")

	def init_publishers(self):
		self.pub_Traction_Orders = rospy.Publisher('topic_traction_orders', traction_Orders, queue_size=10)
		self.pub_Arm_Orders = rospy.Publisher('topic_arm_orders', arm_Orders, queue_size=10)
		self.pub_Connection = rospy.Publisher('topic_connection', connection, queue_size=10)

	def init_subscribers(self):
		rospy.Subscriber('topic_traction_orders', traction_Orders, self.traction_Orders_Callback)
		rospy.Subscriber('topic_arm_orders', arm_Orders, self.arm_Orders_Callback)
		rospy.Subscriber('topic_imu_speed', imu_Speed, self.IMU_Speed_Callback)
		rospy.Subscriber('topic_imu_magnetism', imu_Magnetism, self.IMU_Magnetism_Callback)
		rospy.Subscriber('topic_pots', pots, self.pots_Callback)
		rospy.Subscriber('topic_current', current, self.current_Callback)
		rospy.Subscriber('topic_rpm', rpm, self.RPM_Callback)
		rospy.Subscriber ('odom', Odometry, self.odom_Callback)
		rospy.Subscriber ('topic_bat', batteries, self.bat_Callback)
		rospy.Subscriber ('topic_sensors', geociencia, self.sensors_Callback)

	def traction_Orders_Callback(self,param):
		# global ultimo_derecho,ultimo_izquierdo,sensibilidad_jk
		# ultimo_derecho=param.rpm_r
		# ultimo_izquierdo=param.rpm_l
		# sensibilidad_jk=param.sensibility
		pass

	def IMU_Speed_Callback(self,param):
		pass

	def IMU_Magnetism_Callback(self,param):
		pass

	# global j_counter
	# global joint0_av, joint1_av, joint2_av, joint3_av, joint4_av, joint5_av, joint6_av
	# j_counter = 0
	# joint0_av = 0
	# joint1_av = 0
	# joint2_av = 0
	# joint3_av = 0
	# joint4_av = 0
	# joint5_av = 0
	# joint6_av = 0

	def pots_Callback(self,param):
	# 	global joint0, joint1, joint2, joint3, joint4, joint5, joint6
	# 	global joint0_av, joint1_av, joint2_av, joint3_av, joint4_av, joint5_av, joint6_av
	# 	global j_counter

	# 	wind = 1

	# 	if j_counter == wind:
	# 		joint0 = joint0_av
	# 		joint1 = joint1_av
	# 		joint2 = joint2_av
	# 		joint3 = joint3_av
	# 		joint4 = joint4_av
	# 		joint5 = joint5_av
	# 		joint6 = joint6_av
	# 		joint0_av = 0
	# 		joint1_av = 0
	# 		joint2_av = 0
	# 		joint3_av = 0
	# 		joint4_av = 0
	# 		joint5_av = 0
	# 		joint6_av = 0
	# 		j_counter = 0
	# 	else:
	# 		j_counter+=1
	# 		joint0_av += param.J0/wind
	# 		joint1_av += param.J1/wind
	# 		joint2_av += param.J2/wind
	# 		joint3_av += param.J3/wind
	# 		joint4_av += param.J4/wind
	# 		joint5_av += param.J5/wind
	# 		joint6_av += param.J6/wind
		pass


	def	current_Callback(self,param):
		# global L0_current, L1_current, L2_current, R0_current, R1_current, R2_current
		# L0_current=param.L0_C
		# L1_current=param.L1_C
		# L2_current=param.L2_C
		# R0_current=param.R0_C
		# R1_current=param.R1_C
		# R2_current=param.R2_C
		pass

	def RPM_Callback(self,param):
		# global L0_speed, L1_speed, L2_speed, R0_speed, R1_speed, R2_speed
		# L0_speed=param.L0_V
		# L1_speed=param.L1_V
		# L2_speed=param.L2_V
		# R0_speed=param.R0_V
		# R1_speed=param.R1_V
		# R2_speed=param.R2_V
		pass

	def arm_Orders_Callback(self,param):
		pass

	def odom_Callback(self,param):
		# global latitude, longitude
		# latitude=param.pose.pose.position.x
		# longitude=param.pose.pose.position.y
		pass

	def bat_Callback(self,param):
		# global bat0, bat1, bat2, bat3

		# bat0 = param.voltarm
		# bat1 = param.voltelect
		# bat2 = param.volttrac
		# bat3 = param.voltap
		pass

	def sensors_Callback(self,param):
		# global humedad, metano, hidrogeno, tempratura
		# humedad = param.humedad
		# metano = param.metano
		# hidrogeno = param.hidrogeno
		# tempratura = param.tempratura
		pass


	def arm_orders(self,mensaje): # Line 408
		msg = arm_Orders()
		msg.message = mensaje# .encode('utf-8')
		pub_Arm_Orders.publish(msg)

	def joystick_processing(self,x, y, sensibilidad):
		# global ultimo_izquierdo, ultimo_derecho
		ultimo_izquierdo, ultimo_derecho = 0,0

		(calc_PWM_izq, calc_PWM_der) = self.steering(x, y, sensibilidad)

		MensajeSeguridadMotoresIzq = False
		MensajeSeguridadMotoresDer = False

		if np.sign(ultimo_izquierdo) != np.sign(calc_PWM_izq) and calc_PWM_izq!=0 and np.sign(ultimo_izquierdo)!=0:
			MensajeSeguridadMotoresIzq = True

		if np.sign(ultimo_derecho) != np.sign(calc_PWM_der) and calc_PWM_der!=0 and np.sign(ultimo_derecho)!=0:
			MensajeSeguridadMotoresDer = True

		if np.abs(ultimo_izquierdo-calc_PWM_izq)>3 or np.abs(ultimo_derecho-calc_PWM_der)>3 or (calc_PWM_der==0 and ultimo_derecho!=0) or (calc_PWM_izq==0 and ultimo_izquierdo!=0):

			if MensajeSeguridadMotoresIzq and MensajeSeguridadMotoresDer:
				order = traction_Orders()
				order.rpm_r, order.rpm_l = np.float32(0), np.float32(0)
				order.sensibility = np.float32(sensibilidad)
				pub_Traction_Orders.publish(order)

			elif MensajeSeguridadMotoresIzq:
				order = traction_Orders()
				order.rpm_r, order.rpm_l = np.float32(calc_PWM_der), np.float32(0)
				order.sensibility = np.float32(sensibilidad)
				pub_Traction_Orders.publish(order)

			elif MensajeSeguridadMotoresDer:
				order = traction_Orders()
				order.rpm_r, order.rpm_l = np.float32(0), np.float32(calc_PWM_izq)
				order.sensibility = np.float32(sensibilidad)
				pub_Traction_Orders.publish(order)

			order = traction_Orders()

			order.rpm_r, order.rpm_l = np.float32(calc_PWM_der), np.float32(calc_PWM_izq)
			order.sensibility = np.float32(sensibilidad)
			order.header.stamp = rospy.Time.now()
			pub_Traction_Orders.publish(order)


			ultimo_izquierdo = calc_PWM_izq
			ultimo_derecho = calc_PWM_der

	def steering(self,x,y,sensibilidad_rcv):
		# Convert to polar
		r = math.hypot(-x, -y)
		t = math.atan2(-y, -x)
		# Rotate by 45 degrees
		t += math.pi / 4
		# Back to cartesian
		left = r * math.cos(t)
		right = r * math.sin(t)
		# Rescale the new coords
		left = left * math.sqrt(2)
		right = right * math.sqrt(2)
		# Clamp to -1/+1
		left = max(-1, min(left, 1))
		right = max(-1, min(right, 1))
		return int(sensibilidad_rcv*left), int(sensibilidad_rcv*right)


	# def wait_for_planning_scene_object(self, object_name='part'):
	# 	rospy.loginfo("Waiting for object '" + object_name + "'' to appear in planning scene...")
	# 	gps_req = GetPlanningSceneRequest()
	# 	gps_req.components.components = gps_req.components.WORLD_OBJECT_NAMES
	# 	part_in_scene = False
	# 	while not rospy.is_shutdown() and not part_in_scene:
	# 		# This call takes a while when rgbd sensor is set
	# 		gps_resp = self.scene_srv.call(gps_req)
	# 		# check if 'part' is in the answer
	# 		for collision_obj in gps_resp.scene.world.collision_objects:
	# 			if collision_obj.id == object_name:
	# 				part_in_scene = True
	# 				break
	# 		else:
	# 			rospy.sleep(1.0)
	# 	rospy.loginfo("'" + object_name + "'' is in scene!")



# if __name__ == '__main__':
#     try:
#         node_fpga()
#     except rospy.ROSInterruptException:
#         pass
