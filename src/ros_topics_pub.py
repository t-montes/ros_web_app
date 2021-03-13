#!/usr/bin/env python3
import rospy
from std_msgs.msg import String
import time

class App(object):
	def __init__(self):
		self.start_time = time.time()
		rospy.init_node('ros_topics')
		rospy.loginfo('ROS topics node started.')
		# SUBSCRIBERS
		print(' Subscribing to /robocol/ros_info/topics as String')
		rospy.Subscriber("/subs", String, self.callback)
		# PUBLISHERS
		print(' Publishing to /robocol/ros_info/topics as String')
		self.pub = rospy.Publisher("/robocol/ros_info/topics", String, queue_size=1)

	def callback(self,param):
		self.pub.publish(param)
	
if __name__ == '__main__':
	try:
		app = App()
		rate = rospy.Rate(1)
		c = 0
		while not rospy.is_shutdown():
			txt = str(rospy.get_published_topics())
			app.pub.publish(txt)
			rate.sleep()
			print(' PUB -> n: '+ str(c) +'; t: '+str(round(time.time()-app.start_time,4))+' s; pub_msg: '+txt, end='\r')
			c +=1
		print('\n')
	except rospy.ROSInterruptException:
		pass
