-- CreateEnum
CREATE TYPE "public"."DifficultLevel" AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Word" (
    "id" SERIAL NOT NULL,
    "term" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "example" TEXT NOT NULL,
    "difficult" "public"."DifficultLevel" NOT NULL,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Session" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "difficult" "public"."DifficultLevel" NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SessionWord" (
    "id" SERIAL NOT NULL,
    "wordId" INTEGER NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SessionWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SessionWordAnswer" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "sessionWordId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SessionWordAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Word_term_key" ON "public"."Word"("term");

-- AddForeignKey
ALTER TABLE "public"."Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SessionWord" ADD CONSTRAINT "SessionWord_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "public"."Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SessionWord" ADD CONSTRAINT "SessionWord_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SessionWordAnswer" ADD CONSTRAINT "SessionWordAnswer_sessionWordId_fkey" FOREIGN KEY ("sessionWordId") REFERENCES "public"."SessionWord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
