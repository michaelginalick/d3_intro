class GraphController < ApplicationController
	def index
  end
 
  def data
    respond_to do |format|
      format.json {
        render :json => params[:values]
      }
    end
  end
end
