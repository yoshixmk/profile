require "open-uri"

open("https://www.ruby-lang.org/ja/") do |io|
  puts io.read
end

open("ftp://www.ruby-lang.org/pub/ruby/1.8/ruby-1.8.7.tar.gz") do |io|
  open("ruby-1.8.7.tar.gz", "w") do |f|
    f.write(io.read)
  end
end
