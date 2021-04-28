#!/usr/bin/env python
# license removed for brevity
import rospy
from std_msgs.msg import String

def publisher():
    print("Initializing publisher")
    pub = rospy.Publisher('/interface_events_arm_topic', String, queue_size=10)
    print("Initializing message")
    msg = String()
    msg.data = "Hello world!"
    print("Initializing rate")
    rate = rospy.Rate(9) # 10hz
    while not rospy.is_shutdown():
        print("Publishing")
        pub.publish(msg)
        print("Sleeping")
        rate.sleep()

def main():
    try:
        print("arm publisher was called")
        publisher()
    except rospy.ROSInterruptException:
        pass