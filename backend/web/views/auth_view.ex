defmodule ConflagrationBackend.AuthView do
  use ConflagrationBackend.Web, :view

  def render("show.json", %{jwt: jwt, id: id, username: username}) do
    %{data: %{ jwt: jwt, id: id, username: username}}
  end

  def render("error.json", %{error: error}) do
    %{error: error}
  end
end
