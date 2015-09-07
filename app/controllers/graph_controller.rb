class GraphController < ApplicationController
	def index
  end
 
  def data
  	puts "I am here" + params[:values].to_s
    respond_to do |format|
      format.json {
        render :json => params[:values]
      }
    end
  end
end
