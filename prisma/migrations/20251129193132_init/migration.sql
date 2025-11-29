-- CreateTable
CREATE TABLE "Notes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Notes_userId_title_idx" ON "Notes"("userId", "title");

-- CreateIndex
CREATE INDEX "Notes_createdAt_idx" ON "Notes"("createdAt");
