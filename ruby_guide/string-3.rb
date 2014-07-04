#ex3

str = "Ruby is an object oriented programming language"
column = str.split(/ /)
column.sort! do |a, b|
  ret = a.casecmp(b)
#casecmpは比較し、先なら-1、同じなら0、後なら1
  ret == 0 ? a <=> b : ret
#同じ文字を含む場合に、入れ替えさせる。今回はなくても行ける
end
p column