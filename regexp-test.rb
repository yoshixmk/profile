p /ABC/ =~ "ABC"
p /ABC/ =~ "ABCDEF"
p /ABC$/ =~ "aaaaABC"
p /^ABC/ =~ "aaaABC"
p /A^C/ =~ "A^C"
p /A\^C/ =~ "A^C"
p /A\^C/ =~ "aaaaA^C"
p Regexp.new("A\\^C") =~ "A^C"
p Regexp.new('A\^C') =~ "A^C"



=begin
""と
''では違う。
’’はそのままで出力はでる
%rとかは楽。
=end

