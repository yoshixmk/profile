N = gets.chomp.to_i
input_lines = []
point = 0
N.times do |i|
    input_lines << gets.split(" ").map{|i| i.to_i}
    point += 
        if input_lines[i][0] % 10 == 3 || input_lines[i][0] / 10 == 3
            (input_lines[i][1] * 0.03).to_i
        elsif  input_lines[i][0] % 10 == 5
            (input_lines[i][1] * 0.05).to_i
        else
            (input_lines[i][1] * 0.01).to_i
        end
end

p point