module AccessLog
  CLF_REGEXP = /
    \A
    (\S+)\s
    (\S+)\s
    (\S+)\s
    \[([^\]]+)\]\s
    "(\S+)\s(\S+)\s(\S+)"\s
    (\d+)\s
    (\d+|-)\s
  /x

  Entry = Struct.new(
    :address, :ident, :user, :time,
    :method, :url, :version, :status, :byte,
    :referer, :user_agent
  )

  module_function

  def each_entry(file)
    file.each_line do |line|
      if entry = parse(line)
        yield(entry)
      end
    end
  end

  def parse(line)
    if m = CLF_REGEXP.match(line)
      return Entry.new(*m.captures)
    end
    $stderr.puts("parse failure: #{line.dump}")
    return nil
  end
end