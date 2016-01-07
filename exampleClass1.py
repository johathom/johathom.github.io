C:\Users\johathom>python
#!/usr/bin/env python

def average(my_list):
	sum = 0
	for i in my_list: 
		sum = sum + i
	average = sum/len(my_list)
	print "average"
	