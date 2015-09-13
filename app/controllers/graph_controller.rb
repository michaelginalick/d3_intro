class GraphController < ApplicationController
	def index
  end

  def home
  end
 
  def data
    mathmatics = Graph.do_math(params[:values][0], params[:values][1..params[:values].size])

    if mathmatics[0] != 0
      respond_to do |format|
        format.json {
          render :json => mathmatics
        }
      end
    else
      flash[:notice] = "Invalid number"
      redirect_to root_path
    end
  end
end
