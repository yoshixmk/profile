require "open-uri"

# options = {
#   "Accept-Language" => "ja, en;q=0.5"
# }
open("https://www.ruby-lang.org", { "Accept-Language" => "ja, en;q=0.5" }) { |io| puts io.read }