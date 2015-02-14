require './book'

class BookList
  def initialize()
    @booklist = Array.new()
  end

  def add(book)
    @booklist.push(book)
  end

  def length()
    @booklist.length
  end

  def []=(n,book)
    @booklist[n] = book
  end

  def [](n)
    @booklist[n]
  end

  def delete(book)
    @booklist.delete(book)
  end

  def each
    @booklist.each do |book|
      yield book
    end
  end

  def each_title
    @booklist.each do |book|
      yield book.title
    end
  end

  def each_title_author
    @booklist.each do |book|
      yield book.title, book.author
    end
  end

  def find_by_author(author)
    if block_given?
      @booklist.each do |book|
        if author =~ book.author
          yield book
        end
      end
    else
      @booklist.select do |book|
        author =~ book.author
      end
    end
  end

end