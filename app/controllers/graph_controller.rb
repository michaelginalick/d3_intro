class GraphController < ApplicationController
	def index
  end
 
  def data
  	puts "I am here" + params.to_s
    respond_to do |format|
      format.json {
        render :json => [1,2,3,4,5]
      }
    end
  end
end
