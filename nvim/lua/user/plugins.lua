return {
  {
    "nvim-neo-tree/neo-tree.nvim",
    opts = {
      filesystem = {
        show_hidden_files = false,  -- 默认显示隐藏文件
        visible = true,
        hide_dotfiles = false,
        hide_gitignored = false,
      },
    },
  },
  {
    "zbirenbaum/copilot.lua",
    config = function()
      require("copilot").setup({
        suggestion = { enabled = true, auto_trigger = true },
        panel = { enabled = true },
      })
    end,
  },
}
