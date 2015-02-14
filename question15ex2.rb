require "stringio"

class Question
  def initialize
    @io = File.open("text_sample.txt", "r+")
  end
  def aMethod
    ary = @io.readlines
    @io.rewind
    ary.reverse!
    ary.each do |line|
      @io.puts line
    end
  end
  def bMethod
    ary = @io.readlines
    @io.rewind
    outputline = ary.first.chomp
    temp = File.open("text_sample.txt", "w")
    temp.close
    @io.puts outputline
  end
  def cMethod
    ary = @io.readlines
    @io.rewind
    outputline = ary.last.chomp
    temp = File.open("text_sample.txt", "w")
    temp.close
    @io.puts outputline
  end
end

a = Question.new()
a.aMethod()