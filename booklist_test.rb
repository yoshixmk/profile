require './book'
require './booklist'

booklist = BookList.new
b1 = Book.new("せめて、本格らしく", "平城京")
b2 = Book.new("Neo Aqua III", "Neo Aqua")
booklist.add(b1)
booklist.add(b2)

print booklist[0].title, "\n"
print booklist[1].title, "\n"
p booklist.length
p booklist[1] = Book.new("たのしいRuby", "高橋")
p booklist[0]
#booklist.delete(booklist[1])
#booklist.each{|book| puts book}
#booklist.each_title{|title| puts title}
#booklist.each_title_author{|title, author| puts "タイトル:#{title}, 著者：#{author}"
p booklist.find_by_author(/高橋/)