def clever_print(*args)
  clever = []
  args.each do |arg|
    if arg.class == String
      clever << arg
    else
      clever << arg.to_a
    end
  end
  puts clever.join(" ")
end

clever_print(["Ruby"], "the", ["Programming", "Language"])
#=> Ruby the Programming Language
 
clever_print(["Agile", "Web", "Development"], "with", { :Rails => 3.0 })
#=> Agile Web Development with Rails 3.0