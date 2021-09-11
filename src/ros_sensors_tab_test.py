#!/usr/bin/env python3
import rospy
from std_msgs.msg import String
from std_msgs.msg import UInt8
from std_msgs.msg import Float32
import time
import random


class Eva(object):
	move_eva = 0
	pos_eva = Float32()
	setPoint = 0
	def __init__(self):
		self.start_time = time.time()
		print('*** ROS Node Init ***')
		rospy.init_node('ROS_topics_test')
		rospy.loginfo(' ROS_topics_test node started.')
		# SUBSCRIBERS
		print('\n *** SUBSCRIBERS ***')
		print('   /robocol/sensorica/mover_servos_cajas -> UInt8')
		rospy.Subscriber("/robocol/sensorica/mover_servos_cajas",UInt8,self.boxes_callback)
		print('   /robocol/sensorica/dispensador_eva -> UInt8')
		rospy.Subscriber("/robocol/sensorica/dispensador_eva",UInt8,self.leave_callback)
		print('   /robocol/sensorica/celda_carga -> Float32')
		rospy.Subscriber("/robocol/sensorica/celda_carga",Float32,self.load_cell_callback)
		print('   /robocol/sensorica/posicion_actuador -> Float32')
		rospy.Subscriber("/robocol/sensorica/posicion_actuador",Float32,self.pos_callback)
		print('   /robocol/sensorica/vibracion_motores -> UInt8')
		rospy.Subscriber("/robocol/sensorica/vibracion_motores",UInt8,self.vib_callback)
		print('   /robocol/sensorica/sensors_test_data -> String')
		rospy.Subscriber("/robocol/sensorica/sensors_test_data",String,self.sensors_data_callback)
		# PUBLISHERS
		print('*** PUBLISHERS ***')
		print(' Publishing to /robocol/sensorica/temperatura as Float32')
		self.temp_pub = rospy.Publisher("/robocol/sensorica/temperatura", Float32, queue_size=1)
		print(' Publishing to /robocol/sensorica/ph as Float32')
		self.ph_pub = rospy.Publisher("/robocol/sensorica/ph", Float32, queue_size=1)
		print(' Publishing to /robocol/sensorica/humedad as Float32')
		self.hum_pub = rospy.Publisher("/robocol/sensorica/humedad", Float32, queue_size=1)
		print(' Publishing to /robocol/sensorica/monoxido as Float32')
		self.co_pub = rospy.Publisher("/robocol/sensorica/monoxido", Float32, queue_size=1)
		print(' Publishing to /robocol/sensorica/metano as Float32')
		self.met_pub = rospy.Publisher("/robocol/sensorica/metano", Float32, queue_size=1)
		print(' Publishing to /robocol/sensorica/hidrogeno as Float32')
		self.hyd_pub = rospy.Publisher("/robocol/sensorica/hidrogeno", Float32, queue_size=1)
		print(' Publishing /robocol/sensorica/posicion_actual_eva-> Float32')
		self.pos_eva_pub = rospy.Publisher("/robocol/sensorica/posicion_actual_eva",Float32,queue_size=1)

		# print(' Publishing to /robocol/sensorica/air as Float32')
		# self.air_pub = rospy.Publisher("/robocol/sensorica/air", Float32, queue_size=1)
		# print(' Publishing to /robocol/sensorica/co2 as Float32')
		# self.co2_pub = rospy.Publisher("/robocol/sensorica/co2", Float32, queue_size=1)

	def test_callback(self,param):
		print(' test_callback -> Received: ',param.data)

	def boxes_callback(self,param):
		print(' boxes_callback -> Received: ',param.data)

	def leave_callback(self,param):
		print(' leave_callback -> Received: ',param.data)

	def load_cell_callback(self,param):
		print(' load_cell_callback -> Received: ',param.data)

	def pos_callback(self,param):
		self.setPoint = param.data
		print(' pos_callback -> Received: ',self.setPoint)
		# if(self.move_eva==0):

		# if(self.setPoint>self.pos_eva.data):
		# 	print('UP')
		# 	self.move_eva = 1
		# elif(self.setPoint<self.pos_eva.data):
		# 	print('DOWN')
		# 	self.move_eva = -1
		# elif (self.setPoint==self.pos_eva.data):
		# 	print('STOP')
		# 	self.move_eva = 0

	def vib_callback(self,param):
		print(' vib_callback -> Received: ',param.data)

	def sensors_data_callback(self,param):
		print(' sensors_data_callback -> Received: ',param.data)

	def publish(self, pub, value):
		msg = Float32()
		msg.data = value
		pub.publish(msg)

	
if __name__ == '__main__':
	try:
		eva = Eva()
		rate = rospy.Rate(5)
		# c = 0
		time.sleep(0.1)
		print('\n\n Initial random position: ', end='')
		rand = random.randint(-300,300)
		print(rand)
		eva.publish(eva.pos_eva_pub, rand)

		while not rospy.is_shutdown():

			# print(' EVA_POS -> Feedback: ',eva.pos_eva.data, '  Setpoint: ',eva.setPoint)
			# if(eva.setPoint>eva.pos_eva.data):
			# 	print('UP')
			# 	eva.move_eva = 1
			# 	eva.pos_eva.data +=  1
			# elif(eva.setPoint<eva.pos_eva.data):
			# 	print('DOWN')
			# 	eva.move_eva = -1
			# 	eva.pos_eva.data -=  1
			# elif (eva.setPoint==eva.pos_eva.data):
			# 	print('STOP')
			# 	eva.move_eva = 0

			eva.publish(eva.temp_pub, float(random.randint(20, 23)))
			eva.publish(eva.ph_pub, float(random.randint(6, 8)))
			eva.publish(eva.hum_pub, float(random.randint(35, 55)))
			eva.publish(eva.co_pub, float(random.randint(65, 75)))
			eva.publish(eva.met_pub, float(random.randint(45, 55)))
			eva.publish(eva.hyd_pub, float(random.randint(475, 525)))
			# eva.publish(eva.air_pub, float(random.randint(0, 100)))
			# eva.publish(eva.co2_pub, float(random.randint(0, 800)))

			# if(eva.move_eva):
			# 	eva.pos_eva.data = eva.pos_eva.data + 1
			# 	eva.pos_eva_pub.publish(eva.pos_eva)

			rate.sleep()

	except rospy.ROSInterruptException:
		pass
