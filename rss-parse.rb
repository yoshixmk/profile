require 'rss'
require 'net/http'

def redirect(url, code = 100)
  if code.to_i < 300
    return url
  else
    res = NET::HTTP.get_response(URI.parse(url))
    redirect(res['location'], res.code)
  end
end

url = 'http://www.ruby-lang.org/ja/feeds/news.rss'
rss = RSS::Parser.parse(redirect(url))
puts rss.channel.title