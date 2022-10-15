---
article: true
date: 2022-07-15
order: 7
headerDepth: 2

---

# 快速迁移文件

::: warning Mover 停止服务

在过去，Mover 是迁移文件的最佳选择。过去，它支持您在线地从在 Onedrive、Dropbox、Google Cloud、本地 之间互相迁移文件。然而，大约1年前，微软收购 Mover，并在接下来的几个里逐步关闭 Mover。

- 收购后，仅允许将文件从其他任何地方转移到 Onedrive。
- 几个月前，微软关闭了组织整体通过 mover 迁移。
- 现在，微软主笔停用mover 的几乎所有业务。 

因此目前没有好的迁移文件的方法。<u>本文可能已经过时。</u>

:::

也许你已经在其他品牌云盘或者 Onedrive 个人版保存了你的文件，或者别的组织的 Onedrive for Business 存储了文件，如何其他网盘的文件迁移到Onedrive for Business上呢？

除了手动的把文件下载下来，再上传上到新云盘外，你可以使用微软官方的迁移工具 Mover.io。

![1660670809344.png](https://static-file.hk.zxg.red/2022/08/17/9490abad07e9b.png)

支持的被迁移的云盘

- Amazon S3
- Azure Blob Storage
- Box (Single User)
- Dropbox (Single User)
- Google Cloud Storage
- Google Drive (Single User)
- OneDrive 个人版
- 任何组织的 OneDrive for Business

支持的迁移到的云盘

- Azure Blob Storage
- OneDrive 个人版
- 任何组织的 OneDrive for Business

迁移是指把一个云盘的**部分或者全部**文件从一个云盘复制到另一个云盘。

使用 mover.io 的优点是

- 免费，快速
- 支持增量备份
- 时刻查看迁移进度，支持导出日志
- 可以设置自动迁移，形成主从同步
- 云端迁移任务，不需要自己的电脑

## 授权登入

点击进入 [Fast Cloud File Migrations • Mover](https://mover.io/index.html#individuals-students)

这里可以使用任何微软账户登入。

![1660671478265.png](https://static-file.hk.zxg.red/2022/08/17/4240cfade4101.png)

## 选择迁移来源和去向

你需要分别登入涉及迁移的来源账户和去向账户。

![1660671655230.png](https://static-file.hk.zxg.red/2022/08/17/68f3d42e7c135.png)

如下图所示，左侧和右侧各选择一个账户，即表示从左侧选择的账户2迁移到右侧选择的账户8。

![1660672281738.png](https://static-file.hk.zxg.red/2022/08/17/5169e22be3594.png)

## Migration Manager

你可以在 Migration Manager 查看和管理迁移进度。

![1660672307332.png](https://static-file.hk.zxg.red/2022/08/17/b383635492ee6.png)

在这里你还可以设置

- 定时迁移（主从备份）
- 导出迁移日志
- 重新迁移

::: tip 迁移文件特点

- 增量迁移：覆盖修改的文件，复制新增的文件
- 迁移不会删除任何旧文件，但会更新的文件会覆盖旧文件。

:::
