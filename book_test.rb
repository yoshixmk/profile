require './book_bmp.rb'

ary = []
ary << Book.new("Software5", "Rucker", "SF7")
ary << Book.new("Software3", "Rucker1", "SF7")
ary << Book.new("Software2", "Rucker2", "SF6")
ary << Book.new("Software1", "Rucker3", "SF5")

ary.sort.each do |book|
  printf "%-10s %-20s %s\n", book.genre, book.title, book.author
end