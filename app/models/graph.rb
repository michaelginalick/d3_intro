class Graph < ActiveRecord::Base
	def self.do_math(userentries)
		new_array = []
		userentries.map do |x|
			x = x.to_i
			i = ((x / 52) / 40)
			new_array << i
		end
		new_array
	end
end
