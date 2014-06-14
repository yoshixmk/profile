p /[ABC]/ =~ "ABC"
p /[ABC]/ =~ "ABCDEF"
p /[ABC$]/ =~ "aaaaABC"

p /[ABC][ADEF]/ =~ "BA"
p /[ABC][0-9]/ =~ "0A"
p /[ABC][AX]/ =~ "X"

#[]の数だけ文字数は必要。
#[][]は最低２文字必要