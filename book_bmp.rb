class Book
  include Comparable

  def <=>(other)
    t = @genre.to_s <=> other.genre.to_s
    return t if t != 0
    return @title <=> other.title
  end

  attr_accessor :title, :author, :genre

  def initialize(title, suthor, genre=nil)
    @title = title
    @author = author
    @genre = genre
  end
end