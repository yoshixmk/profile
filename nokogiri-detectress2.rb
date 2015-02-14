require 'open-uri'
require 'nokogiri'
require 'rss'

filename = ARGV[0]
doc = Nokogiri::HTML(open(filename),nil,"utf-8")
doc.css('link[type="application/rss+xml"][rel="alternate"]').each do |link|
    href = link["href"]
    url = URI.join(filename,href)
    puts "detect: #{url}"

    rss = RSS::Parser.parse(url)

    rss.items.each do |item|
      print item.pubDate.strftime("%Y/%m/%d"),":",item.title,"\n"
  end
end
