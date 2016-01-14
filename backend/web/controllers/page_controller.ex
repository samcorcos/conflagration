defmodule Conflagration.PageController do
  use Conflagration.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
