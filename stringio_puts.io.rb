require "stringio"

io = StringIO.new
io.puts("a")
io.puts("b")
io.puts("c")
io.puts("d")
io.rewind
p io.read
