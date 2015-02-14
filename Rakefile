require "./access_log"

entries = []
task :load do
  logfile = ENV["LOGFILE"] || "access.log"  # ログファイル名
  puts "loading #{logfile}."             # メッセージを表示する
  File.open(logfile) do |log|            # ログファイルを開いて
    AccessLog.each_entry(log) do |entry| # すべてのエントリを読み込む
      entries << entry
    end
  end
end

desc "時間帯別のアクセス数を集計する"
task :time => :load do
  hour_count = Hash.new(0)              # 集計用のハッシュ
  entries.each do |entry|               # エントリを順に処理する
    times = entry.time.split(/[:\/ ]/)  # 時刻を分割する
    hour_count[times[3]] += 1           # 「時」のカウントを追加する
  end
  hours = hour_count.keys.sort          # 「時」の一覧を取得する
  hours.each do |h|                     # 集計結果を順に表示する
    printf("%s: %s\n", h, "#" * (hour_count[h]/3))
  end
end

desc "URL別にアクセス数を集計する"
task :url => :load do
  url_count = Hash.new(0)              # 集計用のハッシュ
  entries.each do |entry|              # エントリを順に処理する
    url_count[entry.url] += 1          # URLのカウントを追加する
  end
  ranking = url_count.sort_by{|url, count| -count }
         # アクセス数の降順になるようにハッシュの要素をソート
  ranking.each do |url, count|         # 集計結果を順に表示する
    printf("%d: %p\n", count, url)
  end
end

desc "エラーになったアクセスを表示する"
task :error => :load do
  entries.each do |entry|       # エントリを順に処理する
    if /^[45]/ =~ entry.status  # ステータスが4xxか5xxなら表示する
      printf("%p %p %p\n", entry.time, entry.status, entry.url)
    end
  end
end

task :default => [:time, :error, :url]
