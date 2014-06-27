x=0
a=[]
while x<5
	a<<x
	if a.size==3
		redo
	end
	x+=1
end
p a