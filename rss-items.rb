require 'rss'

url = "https://www.ruby-lang.org/ja/feeds/news.rss"
rss = RSS::Parser.parse(url)
rss.items.each do |item|
  print item.pubDate.strftime("%Y/%m/%d"),":",item.title,"/n"
end
