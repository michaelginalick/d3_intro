class Graph < ActiveRecord::Base
	
	def self.do_math(hours, salary)
		new_array = []
		salary.each do |x|
			x = x.to_i
			i = ((x / 52) / 40)
			new_array << i
		end
		new_array
	end

end
