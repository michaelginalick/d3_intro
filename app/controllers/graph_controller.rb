class GraphController < ApplicationController
	def index
  end

  def home
  end
 
  def data
    Graph.do_math
    respond_to do |format|
      format.json {
        render :json => params[:values]
      }
    end
  end
end
