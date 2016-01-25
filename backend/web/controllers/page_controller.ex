defmodule ConflagrationBackend.PageController do
  use ConflagrationBackend.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
