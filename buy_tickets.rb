def buy_tickets(*names)
  if names.length > 3
    puts "Buying a group ticket for #{names.join(", ")}."
  else
    names.each do |name|
      puts "Buying a ticket for #{name}."
    end
  end
end

buy_tickets("Sam", "Dave", "David")
buy_tickets("John", "Paul", "Ringo", "George")