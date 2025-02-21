-- This file simply bootstraps the installation of Lazy.nvim and then calls other files for execution
-- This file doesn't necessarily need to be touched, BE CAUTIOUS editing this file and proceed at your own risk.
local lazypath = vim.env.LAZY or vim.fn.stdpath "data" .. "/lazy/lazy.nvim"
if not (vim.env.LAZY or (vim.uv or vim.loop).fs_stat(lazypath)) then
    -- stylua: ignore
    vim.fn.system({ "git", "clone", "--filter=blob:none", "https://github.com/folke/lazy.nvim.git", "--branch=stable",
        lazypath })
end
vim.opt.relativenumber = false
vim.opt.rtp:prepend(lazypath)
vim.o.termguicolors = true
vim.opt.number = true
vim.opt.relativenumber = false

-- local lspconfig = require('lspconfig')
-- lspconfig.volar.setup {
--     filetypes = { 'typescript', 'javascript', 'javascriptreact', 'typescriptreact', 'vue' },
--     init_options = {
--         vue = {
--             hybridMode = false,
--         },
--     },

-- }
--
-- 初始化 packer.nvim
-- require('packer').startup(function(use)
--     -- Packer can manage itself
--     use 'wbthomason/packer.nvim'
--     -- Volar 插件
--     use 'jose-elias-alvarez/volar.nvim'
-- end)

-- 配置 Volar 插件
-- require('volar').setup({
--     settings = {
--         ["vue-language-server"] = {
--             -- 这里可以添加 Volar 的设置选项
--             logLevel = "verbose",
--             disableCompletion = false,
--             disableHover = false,
--             disableSignatureHelp = false,
--             disableDiagnostics = false,
--         }
--     }
-- })


-- local lspconfig = require('lspconfig')
-- lspconfig.volar.setup {
--     filetypes = { 'vue' },
--     init_options = {
--         vue = {
--             hybridMode = false,
--         },
--     },

-- }


-- validate that lazy is available
if not pcall(require, "lazy") then
    -- stylua: ignore
    vim.api.nvim_echo(
        { { ("Unable to load lazy from: %s\n"):format(lazypath), "ErrorMsg" }, { "Press any key to exit...", "MoreMsg" } },
        true, {})
    vim.fn.getchar()
    vim.cmd.quit()
end

require "lazy_setup"
require "polish"

-- lspconfig.ts_ls.setup{
--   filetypes = {'typescript', 'javascript', 'vue', 'typescriptreact', 'javascriptreact'},
-- }
