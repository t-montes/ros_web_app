#!/usr/bin/env python3
import rospy
from std_msgs.msg import String
import random


class App(object):
	def __init__(self):
		rospy.init_node('random_nums')
		rospy.loginfo('Node started.')
		# SUBSCRIBERS
		rospy.Subscriber("/subs", String, self.callback)
		# PUBLISHERS
		print('Publishing to /robocol/sensors/temp')
		self.pub = rospy.Publisher("/robocol/sensors/temp", String, queue_size=10)

	def callback(self,param):
		self.pub.publish(param)

	
	
if __name__ == '__main__':
	try:
		app = App()
		rate = rospy.Rate(2)
		while not rospy.is_shutdown():
			rand = str(random.randint(2300,2400)/100.0)
			app.pub.publish(rand)
			rate.sleep()
	except rospy.ROSInterruptException:
		pass
