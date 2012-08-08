task :default do
   puts "\n"
   app = Rake.application
   app.options.show_task_pattern = //
   app.display_tasks_and_comments()
   puts "\n"
end

desc "Rebuild ./css from ./stylus"
task :stylus do
   flags = ["--out css", "--compress", "--include-css"]
   system "stylus #{flags.join " "} stylus"
end

task :stylus_watch do
   flags = ["--out css", "--compress", "--include-css", "--watch"]
   system "stylus #{flags.join " "} stylus"
end

desc "Rebuild ./_site from ./"
task :jekyll do
   flags = ["--no-server", "--no-auto"]
   system "jekyll #{flags.join " "}"
end

task :jekyll_watch do
   flags = ["--server", "--auto"]
   system "jekyll #{flags.join " "}"
end

desc "Rebuild everything"
task :build => [:stylus, :jekyll] do
   puts "\n    __.ii,\n   (__,\" |    All done!\n       | |\n       | |"
end

desc "Build, run, and watch everything"
multitask :run => [:stylus_watch, :jekyll_watch]