#!/usr/bin/env python3
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
import time
import random


class App(object):
	def __init__(self):
		self.start_time = time.time()
		print('*** ROS Node Init ***')
		rospy.init_node('ROS_topics_test')
		rospy.loginfo(' ROS_topics_test node started.')

		# # SUBSCRIBERS
		print('*** SUBSCRIBERS ***')
		print(' Subscribing to /robocol/sensorica/sensors_test_data as String')
		rospy.Subscriber("/robocol/sensorica/sensors_test_data", String, self.test_callback)

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


		# print(' Publishing to /robocol/sensorica/air as Float32')
		# self.air_pub = rospy.Publisher("/robocol/sensorica/air", Float32, queue_size=1)
		# print(' Publishing to /robocol/sensorica/co2 as Float32')
		# self.co2_pub = rospy.Publisher("/robocol/sensorica/co2", Float32, queue_size=1)

	def test_callback(self,param):
	 	print(' Received: ',param.data)
	
if __name__ == '__main__':
	try:
		app = App()
		rate = rospy.Rate(100)
		# c = 0
		while not rospy.is_shutdown():

			txt_temp = Float32()
			txt_temp.data = float(random.randint(20, 30))
			app.temp_pub.publish(txt_temp)

			txt_ph = Float32()
			txt_ph.data = float(random.randint(0, 14))
			app.ph_pub.publish(txt_ph)

			txt_hum = Float32()
			txt_hum.data = float(random.randint(20, 30))
			app.hum_pub.publish(txt_hum)

			txt_co = Float32()
			txt_co.data = float(random.randint(0, 300))
			app.co_pub.publish(txt_co)

			txt_met = Float32()
			txt_met.data = float(random.randint(0, 500))
			app.met_pub.publish(txt_met)

			txt_hyd = Float32()
			txt_hyd.data = float(random.randint(0, 700))
			app.hyd_pub.publish(txt_hyd)


			# txt_air = Float32()
			# txt_air.data = float(random.randint(0, 100))
			# app.air_pub.publish(txt_air)

			# txt_co2 = Float32()
			# txt_co2.data = float(random.randint(0, 800))
			# app.co2_pub.publish(txt_co2)

			rate.sleep()
			# print(' PUB -> n: '+ str(c) +'; t: '+str(round(time.time()-app.start_time,4))+' s; pub_msg: '+txt, end='\r')
			# c +=1
		# print('\n')
	except rospy.ROSInterruptException:
		pass
