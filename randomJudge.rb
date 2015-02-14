f = open("participant.txt")
ary=[]
while line = f.gets
  ary<<line
end
print ary[rand(ary.size)]
f.close