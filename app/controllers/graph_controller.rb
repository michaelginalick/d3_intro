class GraphController < ApplicationController
	def index
  end

  def home
  end
 
  def data
    mathmatics = Graph.do_math(params[:values])
  
    respond_to do |format|
      format.json {
        render :json => mathmatics
      }
    end
  end
end
