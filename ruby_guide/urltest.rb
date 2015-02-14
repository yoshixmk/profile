d="/foo/bar/index.html"
p d.index("/",5)  #8
p d.index("/",1)  #4
p d.index("/",9)  #nil
p d.index("/",8)

a="12/34/56-.html"
b=a.gsub(/h.+l/,"https")
p a.delete("2-4.html")
p b
