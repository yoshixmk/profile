class Book
  attr_accessor :title, :author, :genre
  def initialize(title, author, genre=nil)
    @title = title
    @author = author
    @genre = genre
  end
end
